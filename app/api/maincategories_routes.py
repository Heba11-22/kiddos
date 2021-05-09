from flask import Blueprint, request
from app.models import db, MainCategories, Categories


maincategories_routes = Blueprint('maincategories', __name__)


# Route for getting all of the categories:
@maincategories_routes.route('/')
def get_maincategories():
    maincategories = MainCategories.query.all()
    # print("++++++", [maincategory.to_dict() for maincategory in maincategories])
    return {"maincategories": [maincategory.to_dict() for maincategory in maincategories]}


# Rote for getting a specific main Categories:
@maincategories_routes.route('/<string:mc>')
def get_some_maincategories(mc):
    maincategories = MainCategories.query.filter(MainCategories.main_categoryName.ilike(f'%{mc}%')).all()
    # print("4------------------", [maincategory.to_dict() for maincategory in maincategories])
    return {"Categories": [maincategory.to_dict() for maincategory in maincategories]}


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
    # print("5++++++++++", [category.to_dict() for category in categories])
    return {"Categories": [category.to_dict() for category in categories]}
