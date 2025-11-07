import Student from "../models/StudentModel.js";

export const createStudent = async (req, res) => {
  try {
    const { student_id, name, age, course, email, city } = req.body;
    if (!student_id || !name || !age || !course || !email || !city) {
      return res.status(400).json({ message: "All Fileds are required" });
    }

    const exists = await Student.findOne({ student_id });
    if (exists) {
      return res.status(409).json({ message: "student_id already exists" });
    }

    const student = new Student({ student_id, name, age, course, email, city });
    const saved = await student.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error(err);
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((e) => e.message);
      return res.status(400).json({ message: "Validation error", errors: messages });
    }
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const getStudents = async (req, res) => {
  try {
    const { page = 1, limit = 20, q } = req.query;
    const filter = {};
    if (q) {
      const regex = new RegExp(q, "i");
      filter.$or = [
        { student_id: regex },
        { name: regex },
        { email: regex },
        { city: regex },
        { course: regex },
      ];
    }

    const skip = (Number(page) - 1) * Number(limit);
    const [data, total] = await Promise.all([
      Student.find(filter).skip(skip).limit(Number(limit)).sort({ createdAt: -1 }),
      Student.countDocuments(filter),
    ]);

    res.json({
      data,
      meta: {
        total,
        page: Number(page),
        limit: Number(limit),
        pages: Math.ceil(total / Number(limit)),
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export const getStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) return res.status(404).json({ message: "Student not found" });
    res.json(student);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Invalid id", error: err.message });
  }
};

export const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    if (!updates || Object.keys(updates).length === 0) {
      return res.status(400).json({ message: "No update data provided" });
    }

    if (updates.student_id) {
      const existing = await Student.findOne({
        student_id: updates.student_id,
        _id: { $ne: id },
      });
      if (existing) {
        return res.status(409).json({ message: "student_id already in use" });
      }
    }

    const student = await Student.findOneAndUpdate(
      { $or: [{ _id: id }, { student_id: id }] },
      updates,
      { new: true, runValidators: true }
    );

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
  } catch (err) {
    console.error(err);
    if (err.name === "CastError") {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    res.status(400).json({ message: "Invalid request", error: err.message });
  }
};

export const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findOneAndDelete(req.params.id);
    if (!student) return res.status(404).json({ message: "Student not found" });
    res.json({ message: "Student deleted", student });
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Invalid request", error: err.message });
  }
};
