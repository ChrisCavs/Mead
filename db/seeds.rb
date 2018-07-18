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
Tag.destroy_all
Tagging.destroy_all
Comment.destroy_all
Clap.destroy_all

guest = User.new(
  name: 'Best Guest',
  bio: 'A wonderful person!',
  email: 'guest@gmail.com',
  password: 'guest123'
)
file = EzDownload.open('https://uploads.scratch.mit.edu/users/avatars/395/5762.png')
guest.avatar.attach(io: file, filename: 'guest.jpg')
guest.save

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
  body: "#{Faker::Lorem.paragraph_by_chars(3000)}",
  author_id: chris.id,
  all_tags: 'art, hands-on, exercise'
)
s1.image.attach(io: File.open('app/assets/images/birds_photo.jpg'), filename: 'birds.jpg')
s1.save

s2 = Story.new(
  title: "Learning to Love Communism, a Marxist's Guide to the 20th Century",
  subtitle: 'It took 100 years, but after all this time...',
  body: "#{Faker::Lorem.paragraph_by_chars(4000)}",
  author_id: anthony.id,
  all_tags: 'communism, marxism, guide, time, education'
)
s2.image.attach(io: File.open('app/assets/images/russia.jpg'), filename: 'russia.jpg')
s2.save

s3 = Story.new(
  title: 'Wait, Seltzer Water Might be the Cure?',
  subtitle: 'A host of common illnesses... cured by an everyday beverage?',
  body: "#{Faker::Lorem.paragraph_by_chars(5000)}",
  author_id: victoria.id,
  all_tags: 'health, cure, illness, water'
)
s3.image.attach(io: File.open('app/assets/images/seltzer.jpg'), filename: 'seltzer.jpg')
s3.save

s4 = Story.new(
  title: 'A Wicked Wednesday, and Nothing Left to Do This Week',
  subtitle: 'What if hump day never ended?',
  body: "#{Faker::Lorem.paragraph_by_chars(1000)}",
  author_id: nora.id,
  all_tags: 'hump-day, work-week, hands-on'
)
file = EzDownload.open('http://www.goodmorningwishes.org/wp-content/uploads/2016/12/Beautiful-Happy-Wednesday-Good-Morning.jpg')
s4.image.attach(io: file, filename: 'wednesday.jpg')
s4.save

s5 = Story.new(
  title: 'Time to Question!  Have You Been Living Your Best Life?',
  subtitle: 'A series of questions from the man/woman that knows it all.',
  body: "#{Faker::Lorem.paragraph_by_chars(4500)}",
  author_id: christian.id,
  all_tags: 'time, life, health, questions, education'
)
file = EzDownload.open('https://wallpaperbrowse.com/media/images/img_fjords.jpg')
s5.image.attach(io: file, filename: 'best-life.jpg')
s5.save

s6 = Story.new(
  title: 'What is Our Purpose?',
  subtitle: 'A exploration into the heart of a lonely man',
  body: "#{Faker::Lorem.paragraph_by_chars(5500)}",
  author_id: connor.id,
  all_tags: 'life, health'
)
file = EzDownload.open('https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA5Ny84NzQvb3JpZ2luYWwvbG9uZWx5LW1hbi1zaHV0dGVyc3RvY2suanBn')
s6.image.attach(io: file, filename: 'lonely.jpg')
s6.save

s7 = Story.new(
  title: 'I Spent 4 Months Eating Once a Day. This is What I Found',
  subtitle: 'Could eating less be the answer towards gaining more?',
  body: "#{Faker::Lorem.paragraph_by_chars(6500)}",
  author_id: chris.id,
  all_tags: 'health, food, lifestyle'
)
file = EzDownload.open('https://img.huffingtonpost.com/asset/585be1aa1600002400bdf2a6.jpeg?ops=scalefit_970_noupscale')
s7.image.attach(io: file, filename: 'food-1.jpg')
s7.save

s8 = Story.new(
  title: 'How I Gained 20 Pounds of Muscle This Year Alone',
  subtitle: 'This 12 week workout plan defies all the odds',
  body: "#{Faker::Lorem.paragraph_by_chars(3300)}",
  author_id: anthony.id,
  all_tags: 'health, food, exercise, muscle'
)
file = EzDownload.open('http://rohlandanatomy.wikispaces.com/file/view/Muscles.jpg/249673184/560x375/Muscles.jpg')
s8.image.attach(io: file, filename: 'muscle.jpg')
s8.save

s9 = Story.new(
  title: 'Why Loving Harry Potter Could Get You Killed',
  subtitle: 'You want to read this guide to surviving the wizarding world',
  body: "#{Faker::Lorem.paragraph_by_chars(5000)}",
  author_id: victoria.id,
  all_tags: 'harry-potter, wizard, life, survival'
)
file = EzDownload.open('https://nerdist.com/wp-content/uploads/2017/01/harry-potter.jpg')
s9.image.attach(io: file, filename: 'wizard.jpg')
s9.save

s10 = Story.new(
  title: 'How to Popularize a Brand? Think Differently',
  subtitle: 'Stop selling the product, and start selling...',
  body: "#{Faker::Lorem.paragraph_by_chars(6000)}",
  author_id: nora.id,
  all_tags: 'commercialism, advertising, marketing, brand, thinking'
)
file = EzDownload.open('https://images.yourstory.com/2016/08/establish-unique-brand-personality.jpg?auto=compress')
s10.image.attach(io: file, filename: 'branding.jpg')
s10.save

s11 = Story.new(
  title: 'A Cup of Coffee Each Day',
  subtitle: 'Need that fresh smell in the morning?',
  body: "#{Faker::Lorem.paragraph_by_chars(6500)}",
  author_id: christian.id,
  all_tags: 'health, food, coffee'
)
file = EzDownload.open('https://cdn1.medicalnewstoday.com/content/images/articles/270/270202/cups-of-coffee.jpg')
s11.image.attach(io: file, filename: 'coffee.jpg')
s11.save

s12 = Story.new(
  title: 'Speaking Lower Leads to Greater Success',
  subtitle: 'An new study reveals the truth of vocal tonality',
  body: "#{Faker::Lorem.paragraph_by_chars(3300)}",
  author_id: connor.id,
  all_tags: 'vocals, life, science'
)
file = EzDownload.open('http://2.bp.blogspot.com/_4XFK93QZya8/TTt2xcEF8ZI/AAAAAAAAB10/82C5T0aDGA4/s1600/shutterstock_67414540.jpg')
s12.image.attach(io: file, filename: 'vocal-tone.jpg')
s12.save

s13 = Story.new(
  title: '3 Hours Ago, I Bought a Pet Walrus',
  subtitle: 'Keeping it in a cage would be morally wrong',
  body: "#{Faker::Lorem.paragraph_by_chars(3000)}",
  author_id: chris.id,
  all_tags: 'pets, morality'
)
file = EzDownload.open('https://psmag.com/.image/t_share/MTI3NTgyNDEwMjA3NDM0MDAy/morality-illo.jpg')
s13.image.attach(io: file, filename: 'walrus.jpg')
s13.save

s14 = Story.new(
  title: 'This Week in Trump, North Korea Sends a Gift Basket',
  subtitle: 'Would you open the bag?',
  body: "#{Faker::Lorem.paragraph_by_chars(4800)}",
  author_id: anthony.id,
  all_tags: 'trump, north-korea, politics, gift'
)
file = EzDownload.open('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb_I3ogaA2hln3-6s5X3pnUS3B1E5c67b202wF6Ex0xU2Nqczx')
s14.image.attach(io: file, filename: 'trump-north-korea.jpg')
s14.save

s15 = Story.new(
  title: 'Beer or Wine?',
  subtitle: 'Preferring one might say more about you than you think',
  body: "#{Faker::Lorem.paragraph_by_chars(6500)}",
  author_id: victoria.id,
  all_tags: 'beer, wine, health'
)
file = EzDownload.open('https://assets.punchdrink.com/wp-content/uploads/2016/03/Article-Second-Cheapest-Wine-By-the-Glass-Restaurant-Dining-NYC-Gramercy-Tavern-Juliette-Pope-David-Lynch-Jose-Andres.jpg')
s15.image.attach(io: file, filename: 'beer-or-wine.jpg')
s15.save

s16 = Story.new(
  title: 'Scientists Discover Second Universe',
  subtitle: 'It was right next door, the whole time',
  body: "#{Faker::Lorem.paragraph_by_chars(4500)}",
  author_id: nora.id,
  all_tags: 'science, universe'
)
file = EzDownload.open('https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA5OS83NTgvb3JpZ2luYWwvc3RhcnMtdW5pdmVyc2UuanBn')
s16.image.attach(io: file, filename: 'universe.jpg')
s16.save

s17 = Story.new(
  title: 'Another Congressman, Another Scandal',
  subtitle: 'Is anyone surprised?',
  body: "#{Faker::Lorem.paragraph_by_chars(3000)}",
  author_id: christian.id,
  all_tags: 'politics, scandal, congress'
)
file = EzDownload.open('https://ei.marketwatch.com/Multimedia/2016/09/14/Photos/ZH/MW-EV921_capito_20160914135922_ZH.jpg?uuid=f7b6658a-7aa4-11e6-9964-00137241c023')
s17.image.attach(io: file, filename: 'congressman-scandal.jpg')
s17.save

s18 = Story.new(
  title: 'Parenting is Getting Harder Over Time',
  subtitle: 'These millenials will never make it easy',
  body: "#{Faker::Lorem.paragraph_by_chars(6000)}",
  author_id: connor.id,
  all_tags: 'parenting, life, millenials'
)
file = EzDownload.open('https://cdn.vox-cdn.com/thumbor/CNu8V3hIxqwOjbNbv0nUQLdKLq8=/0x0:1000x750/1200x800/filters:focal(0x0:1000x750)/cdn.vox-cdn.com/uploads/chorus_image/image/46933046/parenting.0.0.jpg')
s18.image.attach(io: file, filename: 'parenting.jpg')
s18.save

users = [chris, anthony, victoria, nora, christian, connor]
stories = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18]

users.each do |user|
  stories.each do |story|
    Clap.create(user_id: user.id, clapable_type: 'Story', clapable_id: story.id, quantity: rand(10))
  end
end

users.each do |user|
  stories.each do |story|
    if rand(2) === 0
      Comment.create(body: Faker::Lorem.paragraph_by_chars(40 + rand(300)), story_id: story.id, author_id: user.id)
    end
  end
end

