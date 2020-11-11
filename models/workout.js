const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workout = new Schema({
day: {
        type: Date,
        default: Date.now()
      },
      exercises: [
        {
          type: {
            type: String,
            trim: true,
            requires: 'Exercise field cannot be blank.'

          },
          name: {
            type: String,
            trim: true,
            required: 'You must enter a name for the exercise.'
          },
          duration: {
            type: Number
          },
          weight: {
            type: Number 
          },
          reps: {
            type: Number
          },
          sets: {
            type: Number
          },
          distance: {
              type: Number
          }
        }
      ]
});

const Workout = mongoose.model("Workout", workout);

module.exports = Workout;
