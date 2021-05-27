from flask import Blueprint, jsonify, redirect, request
from flask_login import login_required, current_user
from app.models import db, Items, User, Carts
import json

cart_routes = Blueprint('cart', __name__)


# Route for getting the items have been added in the cart:
@cart_routes.route('/')
def get_cart_items():
    items = Carts.query.all()
    return {"items": {item.id: item.to_dict() for item in items}}


# Route for adding an item to the cart:
@cart_routes.route('/<int:item_id>/', methods=['POST'])
def post_item_to_cart(item_id):
    user_id = current_user.get_id()
    # user = User.query.filter(User.id == user_id).first()
    # user_id = user.id
    # item = Items.query.filter(Items.id == item_id).first()
    item = Carts(
        userId=user_id,
        itemId=item_id
    )
    db.session.add(item)
    db.session.commit()
    return item.to_dict()


# Route for deleting an item to the cart:
@cart_routes.route('/<int:item_id>/', methods=['DELETE'])
def delete_item_from_cart(item_id):
    Carts.query.filter(Carts.itemId == item_id).delete()
    # print(">>>>>>", item)
    # db.session.delete(item)    <<<<<<<<< Didin't work that way !!!!!!!
    db.session.commit()
    return {"msg": "deleted"}
