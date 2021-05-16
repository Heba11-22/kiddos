from flask import Blueprint, jsonify, redirect, request
from flask_login import login_required, current_user
from app.models import db, Items, User
import json

item_routes = Blueprint('items', __name__)


# Route for getting the latest items have been added:
@item_routes.route('/')
def get_items():
    items = Items.query.order_by(Items.id.desc()).limit(8)
    print("++++++++++++++++++", [item.to_dict() for item in items])
    return {"items": [item.to_dict() for item in items]}


# # Route for getting all of the items:     >>>>>>>>>>> For now
# @item_routes.route('/')
# def get_items():
#     items = Items.query.all()
#     # print("++++++++++++++++++", [item.to_dict() for item in items])
#     return {"items": [item.to_dict() for item in items]}


# route for getting a single item:
@item_routes.route('/<int:id>')
def get_single_item(id):
    item = Items.query.get(id)
    return {"item": item.to_dict()}


@item_routes.route('/<int:item_id>/', methods=['POST'])
# @login_required
def post_save_an_item(item_id):
    user_id = current_user.get_id()
    # user_id = 1
    # print("11111<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>")
    user = User.query.filter(User.id == user_id).first()
    # user_id = user.id
    item = Items.query.filter(Items.id == item_id).first()
    # print("22211111<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>")
    # db.session.execute(f"""insert into user_items ("userId", "itemId")
    # values ({user_id}, {item_id});""")
    user.items.append(item)
    # new_item = user_items()
    # db.session.add()
    # print("33311111<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>")
    db.session.commit()
    # print("4444411111<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>")
    return user.to_dict()
# Route for getting items
