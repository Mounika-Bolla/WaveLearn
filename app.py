import time
from h2o_wave import site, ui, data

page = site['/beer']
beer_verse = """={{before}} bottles of beer on the wall, {{before}} bottles of beer.

    Take one down, pass it around, {{after}} bottles of beer on the wall..."""

beer_card = page.add('Wall', ui.markdown_card(
    box = '3 3 5 2',
    title = '100 Bottles of Beer',
    content = beer_verse,
    data = dict(before = '100', after = '99'),
))


for i in range(100,0,-1):
    beer_card.data.before = str(i)
    beer_card.data.after = str(i-1)
    page.save()
    time.sleep(1)

#"""page = site['/hello']

#quote = page['quote']
#quote.box = '5 5 2 2'
#quote.title = 'Hello!!!'
#quote.content = "This is Monica Bolla"
#page.save()"""

