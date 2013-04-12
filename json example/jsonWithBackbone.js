<!DOCTYPE html>
<html>
    <head>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
        <script src="http://documentcloud.github.com/underscore/underscore-min.js"></script>
        <script src="http://documentcloud.github.com/backbone/backbone-min.js"></script>
        <script>

            var myJSON = JSON.parse('[{"id":1,"name":"some name","description":"hmmm"}]');

			var myCollection = new MyCollection(myJSON, { view: this });
			
			MyObject = Backbone.Model.extend({
			  id: null,
			  name: null,
			  description: null
			});

			MyCollection = Backbone.Collection.extend({ 
			model: MyObject,
			initialize: function (models,options) { }
			});
			
        </script>
        <title>Backbone & JSON</title>
    </head>
    <body>
        <div id="profiles"></div>

        <script id="profileTemplate" type="text/template">
            <div class="profile">
                <div class="info">
                    <div class="name">
                        <%= name %>
                    </div>
                    <div class="title">
                        <%= title %>
                    </div>
                    <div class="background">
                        <%= background %>
                    </div>
                </div>
            </div>
        </script>
		
    </body>
</html>
