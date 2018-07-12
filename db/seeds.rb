# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Story.destroy_all
Following.destroy_all

chris = User.new(
  name: 'Chris Cavalea',
  bio: 'Aspiring programmer, lover of books',
  email: 'chris@gmail.com',
  password: 'batman'
)
chris.avatar.attach(io: File.open('app/assets/images/linkedin_photo.jpeg'), filename: 'linkedin photo.jpeg')
chris.save

anthony = User.new(
  name: 'Anthony Smtih',
  bio: 'Part-time handyman, part-time Uber driver, full-time writer',
  email: 'anthony@gmail.com',
  password: 'batman'
)
anthony.avatar.attach(io: File.open('app/assets/images/anthony.jpg'), filename: 'anthony.jpg')
anthony.save

victoria = User.new(
  name: 'Victoria Lofaro',
  bio: 'A sad girl, studying to become a pediatrician',
  email: 'victoria@gmail.com',
  password: 'batman'
)
victoria.avatar.attach(io: File.open('app/assets/images/victoria.jpg'), filename: 'victoria.jpg')
victoria.save

nora = User.new(
  name: 'Nora McDonnell',
  bio: 'Resident expert in SQL at Fannie Mae',
  email: 'nora@gmail.com',
  password: 'batman'
)
nora.avatar.attach(io: File.open('app/assets/images/nora.jpg'), filename: 'nora.jpg')
nora.save

christian = User.new(
  name: 'Christian Guevara',
  bio: 'Studying to be a nurse, love my girlfriend ;)',
  email: 'christian@gmail.com',
  password: 'batman'
)
christian.avatar.attach(io: File.open('app/assets/images/christian.jpg'), filename: 'christian.jpg')
christian.save

connor = User.new(
  name: 'Connor Wallace',
  bio: "'Big Guy' Wallace, mayor of Newport.  Fluffy dogs are my thing.",
  email: 'connor@gmail.com',
  password: 'batman'
)
connor.avatar.attach(io: File.open('app/assets/images/connor.jpg'), filename: 'connor.jpg')
connor.save