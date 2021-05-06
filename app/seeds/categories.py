from app.models import db, Categories


def seed_categories():
    category1 = Categories(categoryName="girls_dresses", mainCategoryId=1)
    category2 = Categories(categoryName="girls_pants", mainCategoryId=1)
    category3 = Categories(categoryName="girls_shirts&tops",
                           mainCategoryId=1)
    category4 = Categories(categoryName="tgirl-dresses", mainCategoryId=2)
    category5 = Categories(categoryName="tgirl-pants", mainCategoryId=2)
    category6 = Categories(categoryName="tgirl-tops", mainCategoryId=2)
    category7 = Categories(categoryName="boy-jackets", mainCategoryId=3)
    category8 = Categories(categoryName="boy-pants", mainCategoryId=3)
    category9 = Categories(categoryName="boy-shirts", mainCategoryId=3)
    category10 = Categories(categoryName="tboy-jackets", mainCategoryId=4)
    category11 = Categories(categoryName="tboy-pants", mainCategoryId=4)
    category12 = Categories(categoryName="tboy-shirts", mainCategoryId=4)
    
    db.session.add(category1)
    db.session.add(category2)
    db.session.add(category3)
    db.session.add(category4)
    db.session.add(category5)
    db.session.add(category6)
    db.session.add(category7)
    db.session.add(category8)
    db.session.add(category9)
    db.session.add(category10)
    db.session.add(category11)
    db.session.add(category12)
    db.session.commit()


def undo_categories():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()