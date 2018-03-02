# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Artist.destroy_all

Artist.create([
  {name:'Deftones', song:'Beauty School', album:'Diamond Eyes', audio_id:'beautyschool.mp3', photo_url:'deftones2.jpg', bio:'Deftones is an American Rock/Alternative Metal band from Sacramento, California, formed in 1988, consisting of Chino Moreno (lead vocals and guitar), Stephen Carpenter (guitar), Sergio Vega (bass), Frank Delgado (keyboards and turntables), and Abe Cunningham (drums and percussion). Vega (formerly of Quicksand) took on bass duties in mid-2009 in substitution for Chi Cheng, who was seriously injured in an automobile accident in Santa Clara, California on November 4, 2008. Cheng remained in a coma until his death on April 13, 2013 due to cardiac arrest.'},
  {name:'Alexisonfire', song:'Born and Raised', album:'Death Letter (EP)', audio_id:'bornandraised.mp3', photo_url:'alexis2.jpg', bio:'Alexisonfire is a band from St. Catharines, Ontario, Canada. Their music is characterized by turbulent and explosive dynamics with intricate guitar melodies. Consisting of five friends, they formed in late 2001 as the result of a three-band break up.'},
  {name:'Nine Inch Nails', song:'Discipline', album:'The Slip', audio_id:'discipline.mp3', photo_url:'nin.jpg', bio:'Nine Inch Nails is an Industrial rock band that was formed in 1988 in Cleveland, Ohio, United States by Trent Reznor, the only constant member of the band. Reznor is generally credited for popularizing the genre known as "industrial rock" with both his releases and dark, theatrical music videos. As of 2016, the band also officially includes Reznor\'s longtime collaborator Atticus Ross as a second official member.'},
  {name:'Bjork', song:'Joga', album:'Homogenic', audio_id:'joga.mp3', photo_url:'bjork.jpg', bio:'Björk Guðmundsdóttir, (born 21 November 1965 in Reykjavík, Iceland) known mononymously as Björk, is an Icelandic singer-songwriter, multi-instrumentalist, producer and occasional actress. Her musical career began when she was eleven with her study of classical piano in elementary school. One of her instructors sent a recording of Björk singing Tina Charles\' song I Love to Love to RÚV, then the only radio station in Iceland.'},
  {name:'Lupe Fiasco', song:'The Instrumental', album:'Food & Liquor', audio_id:'the_instrumental.mp3', photo_url:'lupe.jpg', bio:'Wasalu Muhammad Jaco (born February 16, 1982 in Chicago, Illinois), better known by his stage name Lupe Fiasco, is a Grammy Award-winning American hip-hop artist and producer. He first became known to the mainstream hip-hop community in 2005 when he appeared on Kanye West\'s album Late Registration on the track "Touch the Sky." In 2006 Lupe released his debut album, Lupe Fiasco\'s Food & Liquor on Atlantic Records.'},
  {name:'Mice Parade', song:'Circle None', album:'Mice Parade', audio_id:'circle_none.mp3', photo_url:'miceparade.jpg', bio:'Mice Parade is the nom-de-son of Adam Pierce, "Mice Parade" being an anagram of Pierce\'s name. Formed in New York City in 1998 the electronica/post-rock band released both their debut single and full length album The True Meaning of Boodleybaye later that year.'},
  {name:'TIAAN', song:'Dive Deep', album:'Dive Deep (Single)', audio_id:'dive_deep.mp3', photo_url:'tiaan.jpg', bio:'Australian Born, L.A.-based singer TIAAN and her sound can only be described as sexy. Blame her intimate, intense and hypnotic music or perhaps it’s the slow, sparse R&B beats, the deep, deep bass or the subject matter of some of her songs: passion-fueled affairs and the all-encompassing emotions they evoke. Mostly though, the steamy atmosphere derives from the Sydney-born singer’s sensuous vocals, infused with longing and delivering lyrics like secrets being shared. '}
  ])