from app.models import db, MainCategories


def seed_mainCategories():
    mainCategory1 = MainCategories(main_categoryName="GIRL")
    mainCategory2 = MainCategories(main_categoryName="TODDLER_GIRL")
    mainCategory3 = MainCategories(main_categoryName="BOY")
    mainCategory4 = MainCategories(main_categoryName="TODDLER_BOY")
    db.session.add(mainCategory1)
    db.session.add(mainCategory2)
    db.session.add(mainCategory3)
    db.session.add(mainCategory4)
    db.session.commit()


def undo_mainCategories():
    db.session.execute('TRUNCATE mainCategories RESTART IDENTITY CASCADE;')
    db.session.commit()