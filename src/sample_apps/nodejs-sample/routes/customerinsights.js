
'use strict';
var express = require('express');
var secrets = require('../secrets.js');
var router = express.Router();
var ci = require('@microsoft/customerinsights');

var ciApi = new ci.CustomerInsights();

function getCiHeadersFromRequest(req) {
  return {
    'Authorization': req.get('Authorization'),
    'Ocp-Apim-Subscription-Key': secrets.customerInsightsApiSubscriberToken
  };
}

router.get('/instances', function (req, res) {
  ciApi.getAllInstances({
    customHeaders: getCiHeadersFromRequest(req)
  }).then(resp => {
    res.status(200).send(resp);
  });
});

router.get('/search', function (req, res) {
  var searchString = req.query.searchQuery;
  var instanceId = req.query.instanceId;
  var segment = req.query.segment;
  ciApi.getEntitiesWithODataQueryParameters(
    instanceId,
    {
      relativePath: `Customer&$search=${searchString}&$select=*&$skip=0&$top=100`,
      forceSearch: true,
      customHeaders: getCiHeadersFromRequest(req)
    }
  ).then(resp => {
    res.status(200).send(resp);
  });
});

router.get('/entities', function (req, res) {
  var instanceId = req.query.instanceId;
  var entityName = req.query.entityName;
  ciApi.getEntitiesWithODataQueryParameters(
    instanceId,
    {
      relativePath: `${entityName}&$select=*&$skip=0&$top=100`,
      forceSearch: false,
      customHeaders: getCiHeadersFromRequest(req)
    }
  ).then(resp => {
    res.status(200).send(resp);
  });
});

router.get('/segments', function (req, res) {
  var instanceId = req.query.instanceId;
  ciApi.getAllSegments(instanceId,
    {
      includeHistoricStats: false,
      customHeaders: getCiHeadersFromRequest(req)
    }).then(resp => {
      res.status(200).send(resp);
    });
});

module.exports = router;
