from app.models import db, MainCategories


def seed_mainCategories():
    maincategory1 = MainCategories(main_categoryName="GIRL")
    maincategory2 = MainCategories(main_categoryName="TODDLER GIRL")
    maincategory3 = MainCategories(main_categoryName="BOY")
    maincategory4 = MainCategories(main_categoryName="TODDLER BOY")
    db.session.add(maincategory1)
    db.session.add(maincategory2)
    db.session.add(maincategory3)
    db.session.add(maincategory4)
    db.session.commit()


def undo_mainCategories():
    db.session.execute('TRUNCATE mainCategories RESTART IDENTITY CASCADE;')
    db.session.commit()