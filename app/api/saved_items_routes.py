from flask import Blueprint, jsonify, redirect, request
from flask_login import login_required, current_user
from app.models import db, Items
from app.models.items import user_items, User
import json

saved_items_routes = Blueprint('saveditems', __name__)


# Route for getting all the saved items for a user:
# @saved_items_routes.route('/<int:user_id>')
# @login_required
# def get_savedItems(user_id):
    # items = User.query.filter(User.id == user_id).all()
    # user_id = current_user.id
    # print("111111/////////////")
    # db.session.execute(f"""SELECT * FROM user_items WHERE "userId" = {user_id};""")
    # print("2222222111111/////////////")
    # items = User.query.filter(User.id == 1).all()
    # print("/////////////", items)
    # return {"items": [item.to_dict() for item in items]}


# Post Route for save an item in a user saved_items page:
# @saved_items_routes.route('/<int:item_id>', methods=['POST'])
# @login_required
# def post_save_an_item(item_id):
#     user_id = current_user.id
#     db.session.execute(f"""insert into user_items ("userId", "itemId")
#     values ({user_id}, {item_id});""")
#     db.session.commit()
#     items = User.query.filter(User.id == user_id).all()
#     return {"items": [item.to_dict() for item in items]}


    # item = Items.query.get(id)
    # print("DDDDDDDD", current_user.id)
    # saved_item = User(
    #     id=1,
    #     items=item_id
    # )
    # db.session.add(saved_item)
    # db.session.commit()
    # return {"items": saved_item}
    # return {"items": [item.to_dict() for item in items]}


# DELETE Route for an item in a user saved_items page:
# @saved_items_routes.route('/<int:item_id>', methods=['DELETE'])
# @login_required
# def delete_save_an_item(item_id):
#     user_id = current_user.id
#     db.session.execute(f""" DELETE FROM user_items 
#     WHERE "userId" = {user_id} AND "itemId" = {item_id}""")
#     db.session.commit()
#     items = User.query.filter(User.id == 1).all()
#     return {"items": [item.to_dict() for item in items]}