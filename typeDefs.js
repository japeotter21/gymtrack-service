import { gql } from 'apollo-server-express'
import mongoose from 'mongoose'

export const typeDefs = gql`
    type Query {
        test: String!
        workouts: [Workout!]!
    }

    type Set {
        reps: Int,
        weight: Float
    }

    type Result {
        name: String,
        notes: String,
        rpe: Int,
        sets: [Set],
        title: String
    }

    type Record {
        date: String,
        results: [Result],
        title: String,
        end: String
    }

    type Workout {
        id: ID,
        user: String,
        record: Record
    }
`
