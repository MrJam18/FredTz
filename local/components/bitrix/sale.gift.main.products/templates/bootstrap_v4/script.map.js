{"version":3,"sources":["script.js"],"names":["BX","namespace","Sale","GiftMainProductsClass","parameters","this","ajaxUrl","contextAjaxData","mainProductState","injectId","isGift","productId","offerId","offers","setEvents","document","location","hash","match","enableGift","raiseNonGiftEvent","bindDelegate","tagName","proxy","clickNavLink","prototype","e","onPageNavigationByLink","proxy_context","PreventDefault","addCustomEvent","onCatalogStoreProductChange","onAddToBasketMainProduct","unsubscribeEvents","removeCustomEvent","productObject","ajax","url","method","data","merge","SITE_ID","message","dataType","processData","start","onsuccess","delegate","html","ob","processHTML","HTML","raiseGiftEvent","innerHTML","processScripts","SCRIPT","link","isValidNavigationLink","type","isElementNode","href","indexOf","onCustomEvent"],"mappings":"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","file":""}