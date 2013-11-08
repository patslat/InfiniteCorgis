CORGIS = %w(
  http://i.imgur.com/CVYHEp0.jpg
  http://i.imgur.com/0ZjWlLi.jpg
  http://i.imgur.com/TwByYao.jpg
  http://i.imgur.com/NHuvhHh.jpg
  http://i.imgur.com/IZBcrK7.png
  http://i.imgur.com/7SeAYdk.jpg
  http://i.imgur.com/mDPb7Y5.jpg
  http://i.imgur.com/eqDTf4Y.jpg
  http://i.imgur.com/67ZerIG.jpg
  http://i.imgur.com/9eMsFeD.jpg
  http://i.imgur.com/JE8cnhQ.jpg
  http://i.imgur.com/84ZF6UW.jpg
  http://i.imgur.com/LnM97w3.png
  http://i.imgur.com/fjm0oDO.jpg
)

1000.times do
  Corgi.create(url: CORGIS.sample)
end
