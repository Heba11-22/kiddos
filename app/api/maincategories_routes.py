from flask import Blueprint, request
from app.models import db, MainCategories, Categories, Items


maincategories_routes = Blueprint('maincategories', __name__)


# Route for getting all of the categories:
@maincategories_routes.route('/')
def get_maincategories():
    maincategories = MainCategories.query.all()
    # print("++++++", [maincategory.to_dict() for maincategory in maincategories])
    return {"maincategories": [maincategory.to_dict() for maincategory in maincategories]}


# Route for getting a specific main Categories:
@maincategories_routes.route('/<string:mc>/')
def get_some_maincategories(mc):
    maincategories = MainCategories.query.filter(MainCategories.main_categoryName.ilike(f'%{mc}%')).all()
    # print("4------------------", [maincategory.to_dict() for maincategory in maincategories])
    return {"Categories": [maincategory.to_dict() for maincategory in maincategories]}


# Route for getting a specific main Categories:
@maincategories_routes.route('/categories/<int:id>')
def get_a_category(id):
    category = Categories.query.get(id)
    print(">>>>>>>>>>", category)
    # print("4------------------", [maincategory.to_dict() for maincategory in maincategories])
    return {"Category": category.to_dict()}


# Route for getting items under Categories:
@maincategories_routes.route('/categories/<int:id>/items')
def get_category_items(id):
    items = Items.query.filter(Items.categoryId == id).all()
    # print(">>>>>>>>>>", items)
    # print("4------------------", [maincategory.to_dict() for maincategory in maincategories])
    return {"items": [item.to_dict() for item in items]}


# Route POST for the search:
@maincategories_routes.route('/search', methods=['POST'])
def post_search_category():
    # print("3------------------")
    data = request.json["search"]
    # print("4------------------", data)
    # if not data:
    #     return {"users": []}
    categories = MainCategories.query.filter(MainCategories.main_categoryName.ilike(f'%{data}%')).all()
    # if not categories:
    #     return {"Categories": []}
    # cat = categories.categories
    # print("5++++++++++", [category.to_dict() for category in categories])
    # print("5++++++++++", cat)
    return {"Categories": [category.to_dict() for category in categories]}
