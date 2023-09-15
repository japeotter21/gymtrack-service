import { Workout } from './models/Workout.js'
export const resolvers = {
    Query: {
        test: () => "hi",
        workouts: () => Workout.find()
    }
}