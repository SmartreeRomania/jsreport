﻿/*! 
 * Copyright(c) 2014 Jan Blaha
 *
 * text recipe simply just evaluates engines and return the defined content type.
 */ 

module.exports  = function (reporter, definition) {

    reporter.documentStore.model.entityTypes["TemplateType"].contentType = {type: "Edm.String"};
    reporter.documentStore.model.entityTypes["TemplateType"].fileExtension = {type: "Edm.String"};
    reporter.documentStore.model.entityTypes["TemplateType"].contentDisposition = {type: "Edm.String"};

    reporter.extensionsManager.recipes.push({
        name: "text",
        execute: function(request, response) {
            response.headers["Content-Type"] = request.template.contentType || "text/plain";
            response.headers["File-Extension"] = request.template.fileExtension || ".txt";

            request.template.contentDisposition =  request.template.contentDisposition || "inline";
            response.headers["Content-Dwisposition"] = request.template.contentDisposition + (request.template.contentDisposition.indexOf(";") !== -1 ? "" :
                                                        ";filename=report." + request.template.fileExtension);

        }
    });
};