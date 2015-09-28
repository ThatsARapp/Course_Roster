courseRoster.directive("hometext", function() {
  return {
    template: "Back to the beginning"
  }
});

courseRoster.directive("changeClass", function() {
  return function (scope, element, attrs) {
    element.bind("click", function() {
      element.toggleClass (attrs.changeClass);
    });
  }
});

courseRoster.directive("sampleCourse", function() {
  return {
    scope:{
      detail:"@"
    },
    template: '<div>{{detail}}</div>'
  }
});