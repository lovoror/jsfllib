﻿var doc = fl.getDocumentDOM();var lib = doc.library;var items = lib.getSelectedItems();var foldername = prompt("選択したアイテムをフォルダに移動","");items.forEach(function(item,i){	if(!(item instanceof FolderItem)){		if(foldername && !lib.itemExists(foldername)){			lib.newFolder(foldername);		}		lib.moveToFolder(foldername,item.name)	}});