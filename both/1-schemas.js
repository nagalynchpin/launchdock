Schemas = {};
UI.registerHelper("Schemas", Schemas);

Schemas.Host = new SimpleSchema({
	privateHost: {
		type: String
	},
	publicHost: {
		type: String
	},
	port: {
		type: Number,
		defaultValue: 2375
	},
	max: {
		type: Number,
		defaultValue: 100,
		label: "Max #"
	},
	active: {
		type: Boolean,
		defaultValue: true
	},
	details: {
		type: Object,
		blackbox: true,
		optional: true
	},
	dockerImages: {
		type: [Object],
		optional: true
	},
	'dockerImages.$.name': {
		type: String
	},
	'dockerImages.$.id': {
		type: String
	},
	'dockerImages.$.createdAt': {
		type: Date
	},
	'dockerImages.$.virtualSize': {
		type: Number
	}
});

Schemas.AppInstance = new SimpleSchema({
	port: {
		type: Number,
		label: "App port",
		optional: true
	},
	image: {
		type: String,
		label: "Docker image"
	},
	containerId: {
		type: String,
		label: "Container ID",
		optional: true
	},
	container: {
		type: Object,
		optional: true
	},
	'container.pid': {
		type: Number,
		optional: true
	},
	createdAt: {
		type: Date,
		denyUpdate: true,
		autoValue: function () {
		  if (this.isInsert)
		    return new Date;
		}
	},
	status: {
		type: String,
		optional: true
	},
	env: {
		type: Object,
		blackbox: true,
		label: "Defined environment variables"
	},
	actualEnv: {
		type: [String],
		optional: true,
		label: "Actual environment variables"
	},
	hostnames: {
		type: [String],
		optional: true
	},
	dockerHosts: {
		type: [String],
		label: "Hosts running this instance",
		optional: true
	}
});

Schemas.DockerImage = new SimpleSchema({
	name: {
		type: String,
		index: 1,
		unique: true
	},
	tarUrl: {
		type: String,
		regEx: SimpleSchema.RegEx.Url,
		optional: true
	},
	inRepo: {
		type: Boolean,
		defaultValue: true
	}
});

Schemas.LaunchInstance = new SimpleSchema({
	dockerImage: {
		type: String
	},
	hostname: {
		type: String,
		optional: true
	},
	env: {
		type: [Object],
		label: "Additional Environment Variables",
		optional: true
	},
	'env.$.name': {
		type: String
	},
	'env.$.value': {
		type: String
	}
});