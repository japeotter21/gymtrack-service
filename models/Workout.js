import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Set = new Schema({
  reps: Number,
  weight: String
});

const Result = new Schema({
    name: String,
    notes: String,
    rpe: Number,
    sets: [Set],
    title: String
})

const recordSchema = new Schema({
    date: Date,
    results: [Result],
    title: String,
    end: Date
})

const workoutSchema = new Schema({
    record: [recordSchema],
    user: String
})

export const Workout = mongoose.model('Workout',workoutSchema)
export const Record = mongoose.model('Record',recordSchema)