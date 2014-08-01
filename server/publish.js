Meteor.publish("appInstance", function (id) {
  if (this.userId) {
    return AppInstances.find({_id: id}, {limit: 1});
  } else {
    return [];
  }
});

Meteor.publish("dockerImages", function () {
	if (this.userId) {
		return DockerImages.find();
	} else {
    return [];
  }
});

Meteor.publish("hosts", function () {
	if (this.userId) {
		return Hosts.find();
	} else {
    return [];
  }
});

Meteor.publish("appInstances", function () {
  if (this.userId) {
    return AppInstances.find();
  } else {
    return [];
  }
});

Hosts.allow({
  insert: function () {
      return true;
  },
  remove: function (){
      return true;
  },
  update: function() {
      return true;
  }
});