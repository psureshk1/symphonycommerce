var image_URL="http://sneakpeeq-sites.s3.amazonaws.com/";
var API='http://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js';




var controllers=angular.module("controllers",['ngSanitize']);

controllers.controller("MainController",['$scope','$http','$sce',function($scope,$http,$sce){
		$scope.filterPrice=0;
		$scope.setPrice=false;
		console.log($scope.filterPrice);
		$scope.mobilePic="http://sneakpeeq-sites.s3.amazonaws.com/fijiwater/images/mobile-hero-final.jpg";
		$scope.getAPIData=function(){
		
			$http({
				method:"GET",
				url:"http://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js"
				}).success(function($data){
					$scope.data=$data;
					$scope.backgroundImage="http://sneakpeeq-sites.s3.amazonaws.com/" + $data.bannerImage.ref;
					$scope.products=$data.products
					// console.log("background : " +$scope.products );

					
				});
		};
		 $scope.trustSrc = function(src) {
    			return $sce.trustAsResourceUrl(src);
  			}

		$scope.getAPIData();
		// console.log("background image_URL: "+ $scope.backgroundImage);
		// console.log("products"+ $scope.products);

		$scope.getProductImage = function($image){
			return "http://"+$image.substring(2);
		}


		$scope.setFilterPrice=function(){

			if(!$scope.setPrice) {
			$scope.filterPrice=20;
			console.log("from the funtcion:"+$scope.filterPrice);
			$scope.setPrice=!$scope.setPrice;
			}
			else {
				$scope.filterPrice=0;
			console.log("from the funtcion:"+$scope.filterPrice);
			$scope.setPrice=!$scope.setPrice;
			}

		};

		//  check price greater than 20$

		$scope.greaterThan = function(prop, val){
	    return function(item){
	    	var temp=item[prop];
	    	console.log("price value :" +  temp);
	      return item[prop]/100 > val;
	    }



}

		// $scope.sortingRule=$scope.products.name;
}]);
