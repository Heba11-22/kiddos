from app.models.items import db, user_items


def seed_user_items():
    # row = user_items(userId=1, itemId=3)
    # db.session.add(row)
    # for i in range(2):
    db.session.execute(f"""insert into user_items ("userId", "itemId")
    values (1, 3);""")
    db.session.commit()
    # count = 4
    # # result = []
    # tracker = set()
    # while count > 0:
    #     userId = 1
    #     itemId = count

    #     tup = (userId, itemId)

    #     if tup in tracker:
    #         continue

    #     tracker.add(tup)
    #     count -= 1
    #     db.session.add(row)
    # db.session.commit()


def undo_user_items():
    db.session.execute('TRUNCATE user_items RESTART IDENTITY CASCADE;')
    db.session.commit()