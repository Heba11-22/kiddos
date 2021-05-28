from app.models import db, Categories


def seed_categories():
    category1 = Categories(categoryName="Girl Dresses", mainCategoryId=1)
    category2 = Categories(categoryName="Girl Pants", mainCategoryId=1)
    category3 = Categories(categoryName="Girl Tops",
                           mainCategoryId=1)
    category4 = Categories(categoryName="Toddler Girl Dresses", mainCategoryId=2)
    category5 = Categories(categoryName="Toddler Girl Pants", mainCategoryId=2)
    category6 = Categories(categoryName="Toddler Girl Tops", mainCategoryId=2)
    category7 = Categories(categoryName="Boy Shirts", mainCategoryId=3)
    category8 = Categories(categoryName="Boy Jackets", mainCategoryId=3)
    category9 = Categories(categoryName="Boy Pants", mainCategoryId=3)
    category10 = Categories(categoryName="Toddler Boy Shirts", mainCategoryId=4)
    category11 = Categories(categoryName="Toddler Boy Jackets", mainCategoryId=4)
    category12 = Categories(categoryName="Toddler Boy Pants", mainCategoryId=4)
    
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