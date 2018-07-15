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
  body: "Aliquam ac elit sit amet quam maximus luctus. Morbi iaculis orci accumsan venenatis gravida. Phasellus molestie diam sem, vel pharetra urna suscipit sit amet. Maecenas ac consequat leo. Integer pellentesque elit porttitor leo luctus feugiat. Cras eu nisl non odio commodo pellentesque ut ac tellus. In hac habitasse platea dictumst. Curabitur eu semper odio. Integer in purus et tellus ornare vestibulum. Proin leo ante, suscipit at purus nec, pharetra hendrerit mi. Aliquam mi elit, vehicula eu consequat eget, porttitor in arcu. Suspendisse lacinia pulvinar mi, sed sodales ex ornare posuere. Donec in risus consectetur, iaculis nulla at, imperdiet diam. Ut molestie porta justo, eget pharetra odio.

Aliquam nec accumsan dui. Quisque vitae velit imperdiet, iaculis ante nec, laoreet quam. Etiam aliquam suscipit odio sed tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer non varius urna. Nulla vulputate suscipit vestibulum. Nulla tincidunt efficitur justo, sed vulputate justo dignissim ut. Ut pellentesque molestie consequat. Phasellus eget sapien hendrerit, porttitor nunc at, dictum felis. Donec sagittis massa gravida metus efficitur, in ornare odio convallis. Cras lacinia eros eleifend vestibulum tempor.

Ut at efficitur odio. Vivamus viverra, erat in dignissim aliquet, dui eros pharetra nunc, in varius orci lectus sed nisl. Etiam iaculis fringilla interdum. Quisque in faucibus dolor, at efficitur dolor. Nulla tortor risus, faucibus consectetur erat sit amet, eleifend aliquet sapien. Vivamus elementum sed diam et faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus tellus turpis, semper nec ligula tristique, dapibus vulputate orci. Quisque hendrerit finibus diam in condimentum. Nunc ornare gravida nisl non accumsan. Vivamus eu auctor mauris, sit amet feugiat massa. Nulla eros odio, sollicitudin non tellus ac, vehicula faucibus lectus. Mauris bibendum turpis urna, id ultricies dolor condimentum eget. Aliquam at nibh gravida massa venenatis gravida.

Etiam augue nulla, ornare non tincidunt non, ornare in sapien. Proin quis tortor nisi. Mauris dictum fringilla turpis ac ultrices. Nunc venenatis ligula a risus vestibulum eleifend. In hac habitasse platea dictumst. Curabitur vitae faucibus dui, ac mollis leo. Cras rhoncus mi orci, vel mattis risus congue vitae. Etiam fermentum eleifend aliquet. Integer interdum pharetra nisl, at tincidunt sapien maximus vel. Morbi semper ligula vitae turpis fermentum, sed interdum leo molestie. Sed vitae enim a neque dictum tempor ac nec enim. Donec a lorem tortor.

Vestibulum vitae laoreet ipsum, quis porta enim. Donec eleifend, lectus eu lobortis pellentesque, erat elit convallis odio, nec sagittis lorem elit pharetra metus. Donec ultrices eu felis vel eleifend. Cras luctus lobortis egestas. Morbi blandit odio quis odio malesuada maximus. Mauris id nibh ex. Maecenas sapien quam, volutpat eu nunc nec, mattis bibendum nunc. Quisque suscipit diam magna. Pellentesque nunc lectus, imperdiet in mollis id, eleifend id ipsum. Phasellus laoreet posuere metus, in semper nulla egestas non. Integer vitae leo consequat, accumsan quam eget, dignissim leo. Vestibulum ullamcorper quam leo, vel porta nisl tristique eget. Integer et mauris at justo luctus tempus sagittis a neque. In hac habitasse platea dictumst.

Mauris nisi mauris, efficitur eu lectus sed, dignissim pulvinar tellus. Aliquam ornare, magna ut ultricies consectetur, ante risus tristique lorem, vitae fringilla purus sapien vulputate nunc. Pellentesque molestie quis erat sit amet venenatis. Morbi dignissim, magna vitae pulvinar suscipit, ante orci cursus mauris, quis varius justo augue quis risus. Etiam sit amet volutpat elit. Nunc vestibulum aliquet sollicitudin. Donec euismod interdum gravida. Suspendisse erat augue, efficitur id volutpat vitae, sollicitudin id justo. Sed pulvinar pulvinar scelerisque.

Vivamus eros libero, bibendum nec magna id, egestas volutpat arcu. Nullam magna ante, viverra ut massa at, volutpat posuere odio. Etiam maximus facilisis sapien vitae tristique. Fusce iaculis enim eu eros molestie, vel molestie tortor ultrices. Ut vehicula diam nec erat condimentum pharetra. Donec in mattis velit. Aenean dui nisi, porta nec dolor ac, varius rhoncus ligula. Praesent euismod mollis leo sit amet elementum. Cras orci libero, bibendum congue pharetra at, pulvinar sit amet diam. Nulla auctor maximus tempor. Praesent in neque sed justo scelerisque laoreet. Suspendisse sit amet nulla odio. Aenean ex urna, sodales in nisi quis, finibus ultrices lectus. Praesent ut tellus augue.

Sed scelerisque tristique elementum. Sed aliquet quam a neque euismod, nec molestie nibh tempor. Pellentesque molestie dignissim magna et ullamcorper. Integer ligula tortor, congue non leo a, placerat vestibulum est. Fusce pharetra maximus varius. In hac habitasse platea dictumst. In dictum tortor ex, sed aliquet lorem viverra nec. Phasellus sit amet orci cursus nibh scelerisque dapibus posuere quis turpis. Fusce id lobortis ligula. Etiam nec molestie mi. Curabitur accumsan ligula non enim vehicula efficitur. Etiam tristique velit at maximus maximus. Fusce finibus tincidunt tristique. Quisque aliquet congue mattis. Aenean luctus consectetur dui, id luctus magna condimentum vitae.

Vivamus ac ipsum eu massa malesuada rutrum. Ut elit ex, rutrum eu condimentum in, ultricies a nibh. Donec a mauris nec erat varius rutrum. Nulla est magna, vehicula tincidunt bibendum a, consectetur dignissim nunc. Donec vestibulum enim eu lacinia auctor. Praesent dignissim ullamcorper rhoncus. Maecenas lectus nulla, mollis non congue et, pretium in sem. Sed convallis sed nisl quis condimentum.

Donec lobortis pulvinar urna tincidunt rutrum. Donec odio eros, luctus et lacus consectetur, porta egestas mi. Aliquam dictum, nunc a porttitor ornare, eros nulla gravida lorem, nec imperdiet purus ex non neque. Pellentesque vulputate quam ac eros sagittis, a scelerisque urna luctus. Nulla sed congue leo, ut sodales nunc. Duis mauris mi, pharetra ac nisl id, tempus luctus eros. Cras vel lacus nisl. Sed luctus et ligula non semper. Pellentesque lobortis vel magna sed dictum. Duis vitae massa lacus. Maecenas in tempor lacus. Fusce consequat dui ac mauris dictum, eget gravida tellus tincidunt.

Morbi enim elit, ullamcorper vel sodales ut, euismod ut ex. Praesent eu sapien vel nibh tempor interdum sit amet sit amet tortor. Cras non luctus purus. Phasellus ligula nisl, malesuada quis accumsan at, tincidunt nec ante. Maecenas eget ornare arcu. Praesent sit amet risus velit. Suspendisse potenti.

Aenean consectetur libero quis ante imperdiet elementum. Sed porttitor dui orci, ut auctor lacus interdum vitae. Vestibulum ornare dolor sem, eu semper nibh sagittis id. Quisque congue, dolor a dictum porta, nisl purus fringilla nisi, id pharetra orci magna sed dui. Aenean id libero a arcu accumsan lobortis. Etiam finibus enim fringilla leo bibendum, id mattis leo semper. Quisque pharetra sem sagittis erat accumsan convallis. Ut consequat tempus diam sed sollicitudin. Donec nec nibh id metus efficitur pharetra.

Morbi eget justo id massa accumsan convallis quis a quam. Nunc vitae nulla sit amet sapien interdum egestas. Aenean varius orci ante. Vivamus non sodales nibh. Vestibulum eget quam ante. Proin laoreet mauris ipsum, eget ullamcorper enim rhoncus vel. Curabitur pharetra dui nec turpis cursus, at iaculis eros commodo. Nam mollis odio non tortor ultricies tempor. Sed egestas convallis est. Vivamus convallis lorem sit amet libero gravida, vel sodales neque egestas. Sed vitae accumsan libero. Morbi nunc erat, ultricies id aliquet nec, viverra semper magna. Praesent congue, diam quis auctor iaculis, erat velit iaculis tellus, vulputate ullamcorper sem nulla faucibus enim. Sed vitae suscipit enim. Ut sagittis lacinia cursus.

Integer quis iaculis nunc. Suspendisse vel nisl facilisis, condimentum magna id, molestie lorem. Cras ut tellus commodo, faucibus neque at, viverra lectus. Pellentesque molestie leo a tortor condimentum vestibulum. Sed ultricies ultricies purus non vulputate. Morbi imperdiet ipsum erat, et aliquet lacus imperdiet ac. Nulla non tellus a orci cursus aliquet. Curabitur sodales nunc turpis, in molestie urna dapibus in. Cras id euismod lacus, quis tincidunt lacus. Vestibulum venenatis, ipsum a aliquam laoreet, nunc purus sollicitudin libero, et posuere odio orci vel sem. Curabitur fringilla ut elit sit amet facilisis. Cras porta quis orci sit amet porta. In hac habitasse platea dictumst.",
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