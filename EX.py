

from h2o_wave import site, ui

from h2o_wave import main, app, Q, ui, data


@app('/hello')
async def serve(q: Q):

    q.page['quote'] = ui.markdown_card(
        box='4 4 6 6',
        title='Hello World',
        content='"The Internet? Is that thing still around?" - *Homer Simpson*',
    )

    
    await q.page.save()
