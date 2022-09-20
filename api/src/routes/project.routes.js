"use strict";
var model = "project";
var express = require("express");
var Controller = require("../controllers/" + model + ".controller");

var router = express.Router();
var md_multer = require("../middlewares/multer");

router.get("/" + model + "/home", Controller.home);
router.post("/" + model + "/test", Controller.test);
router.post("/" + model + "/save_project/", Controller.saveProject);
router.get("/" + model + "/get/:id?", Controller.getProject);
router.get("/" + model + "s/get/", Controller.getProjects);
router.put("/" + model + "/update/:id?", Controller.updateProject);
router.delete("/" + model + "/delete/:id?", Controller.deleteProject);
// router.post('/project/:id/file/upload', ProjectController.uploadFile);
// router.post('/'+model+'/:id/file/upload', md_multer.multerUploadFile(model).single('file'), Controller.uploadFile);
router.post(
	"/" + model + "/:id/file/upload",
	// () => md_multer.multerUploadFile(model).single("file"),
	 md_multer.multerUploadFile(model).single("file"),
	Controller.uploadFile
);
router.get('/'+model+'/get-image/:image', Controller.getImageFile)

module.exports = router;
