# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create({
    username: "jimmbo_123",
    email: "jimmy_h123@gmail.com",
    first_name: "Jim",
    last_name: "Halpert",
    password: "1234567"
    })

    # post1 = Post.create({
    #     author_id: user1.id
    # })