# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'rest-client'
require 'faker'
require 'ez_download'

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

s1 = Story.new(
  title: 'How to Paint a Picture in 1000 Words',
  subtitle: 'A first-hand look at pointless exercises',
  body: "#{Faker::Lorem.paragraph_by_chars(400) + '/r/n' + Faker::Lorem.paragraph_by_chars(500) + '/r/n' + Faker::Lorem.paragraph_by_chars(600) + '/r/n' + Faker::Lorem.paragraph_by_chars(600)}",
  author_id: chris.id
)
s1.image.attach(io: File.open('app/assets/images/birds_photo.jpg'), filename: 'birds.jpg')
s1.save

s2 = Story.new(
  title: "Learning to Love Communism, a Marxist's Guide to the 20th Century",
  subtitle: 'It took 100 years, but after all this time...',
  body: "#{Faker::Lorem.paragraph_by_chars(1000) + '/r/n' + Faker::Lorem.paragraph_by_chars(1000) + '/r/n' + Faker::Lorem.paragraph_by_chars(1000) + '/r/n' + Faker::Lorem.paragraph_by_chars(600)}",
  author_id: nora.id
)
s2.image.attach(io: File.open('app/assets/images/russia.jpg'), filename: 'russia.jpg')
s2.save

s3 = Story.new(
  title: 'Wait, Seltzer Water Might be the Cure?',
  subtitle: 'A host of common illnesses... cured by an everyday beverage?',
  body: "#{Faker::Lorem.paragraph_by_chars(300) + '/r/n' + Faker::Lorem.paragraph_by_chars(300) + '/r/n' + Faker::Lorem.paragraph_by_chars(300)}",
  author_id: christian.id
)
s3.image.attach(io: File.open('app/assets/images/seltzer.jpg'), filename: 'seltzer.jpg')
s3.save

s4 = Story.new(
  title: 'A Wicked Wednesday, and Nothing Left to Do This Week',
  subtitle: 'What if hump day never ended?',
  body: "#{Faker::Lorem.paragraph_by_chars(600) + '/r/n' + Faker::Lorem.paragraph_by_chars(600) + '/r/n' + Faker::Lorem.paragraph_by_chars(600)}",
  author_id: anthony.id
)
file = EzDownload.open('http://www.goodmorningwishes.org/wp-content/uploads/2016/12/Beautiful-Happy-Wednesday-Good-Morning.jpg')
s4.image.attach(io: file, filename: 'wednesday.jpg')
s4.save

s5 = Story.new(
  title: 'Time to Question!  Have You Been Living Your Best Life?',
  subtitle: 'A series of questions from the man/woman that knows it all.',
  body: "#{Faker::Lorem.paragraph_by_chars(300) + '/r/n' + Faker::Lorem.paragraph_by_chars(300) + '/r/n' + Faker::Lorem.paragraph_by_chars(300)}",
  author_id: christian.id
)
file = EzDownload.open('https://wallpaperbrowse.com/media/images/img_fjords.jpg')
s5.image.attach(io: file, filename: 'best-life.jpg')
s5.save

s6 = Story.new(
  title: 'What is Our Purpose?',
  subtitle: 'A exploration into the heart of a lonely man',
  body: "#{Faker::Lorem.paragraph_by_chars(300) + '/r/n' + Faker::Lorem.paragraph_by_chars(300) + '/r/n' + Faker::Lorem.paragraph_by_chars(300)}",
  author_id: victoria.id
)
file = EzDownload.open('https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA5Ny84NzQvb3JpZ2luYWwvbG9uZWx5LW1hbi1zaHV0dGVyc3RvY2suanBn')
s6.image.attach(io: file, filename: 'lonely.jpg')
s6.save

s7 = Story.new(
  title: 'I Spent 4 Months Eating Once a Day. This is What I Found',
  subtitle: 'Could eating less be the answer towards gaining more?',
  body: "#{Faker::Lorem.paragraph_by_chars(300) + '/r/n' + Faker::Lorem.paragraph_by_chars(300) + '/r/n' + Faker::Lorem.paragraph_by_chars(300)}",
  author_id: nora.id
)
file = EzDownload.open('https://img.huffingtonpost.com/asset/585be1aa1600002400bdf2a6.jpeg?ops=scalefit_970_noupscale')
s7.image.attach(io: file, filename: 'food-1.jpg')
s7.save

s8 = Story.new(
  title: 'How I Gained 20 Pounds of Muscle This Year Alone',
  subtitle: 'This 12 week workout plan defies all the odds',
  body: "#{Faker::Lorem.paragraph_by_chars(300) + '/r/n' + Faker::Lorem.paragraph_by_chars(300) + '/r/n' + Faker::Lorem.paragraph_by_chars(300)}",
  author_id: chris.id
)
file = EzDownload.open('http://rohlandanatomy.wikispaces.com/file/view/Muscles.jpg/249673184/560x375/Muscles.jpg')
s8.image.attach(io: file, filename: 'muscle.jpg')
s8.save