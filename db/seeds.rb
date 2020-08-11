# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Muscle.destroy_all
Movement.destroy_all
User.destroy_all

@admin = User.create(username: 'edwinvera', email: 'edwinvera@gmail.com', password: '111111')
puts "#{User.count} user created"

@squat = Movement.create(name: 'Squat', user: @admin)
@benchpress = Movement.create(name: 'Bench Press', user: @admin)
@deadlift = Movement.create(name: 'Deadlift', user: @admin)
puts "Added #{Movement.count} movements"

@shoulders = Muscle.create(name: "shoulders", note: "The muscles and joints of the shoulder allow for a remarkable range of motion, making it one of the most mobile joints in the human body.", movement_id: @benchpress.id)
@back = Muscle.create(name: "back", note: "The muscles of the back provides support for the head and trunk, strength in the trunk, as well as great flexibility and movement.", movement_id: @squat.id)
@biceps = Muscle.create(name: "biceps", note: "Working across three joints, the biceps brachii functions as a powerful supinator and flexor of the forearm, and assists in bring the arm forward and upwards at the shoulder.", movement_id: @deadlift.id)
@chest = Muscle.create(name: "chest", note: "Responsible for movement at the shoulder joint in many actions, the pecs assist in flexion, adduction, rotation, and stabiity of the humerus.", movement_id: @benchpress.id)
@triceps = Muscle.create(name: "triceps", note: "The triceps is an extensor muscle of the elbow joint and an antagonist of the biceps and brachialis muscles.", movement_id: @benchpress.id)
@quads = Muscle.create(name: "quads", note: "Powerful muscles that flex the hip and extend the leg at the knee. Crucial for walking, running, jumping, and squatting.", movement_id: @squat.id)
@hamstrings = Muscle.create(name: "hamstrings", note: "Powerful muscles that extend the hip and flex the knee. Crucial for walking, running, jumping, and deceleration of knee extension.", movement_id: @deadlift.id)
@glutes = Muscle.create(name: "glutes", note: "Mainly functions for powerful extension, abduction, and external rotation of the joint.", movement_id: @deadlift.id)
puts "Added #{Muscle.count} muscles"

# @squat.muscles.push(@back, @quads, @hamstrings, @glutes)
# @benchpress.muscles.push(@shoulders, @back, @chest, @triceps)
# @deadlift.muscles.push(@back, @biceps, @chest, @quads, @hamstrings, @glutes)