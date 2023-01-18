/*
 * Testkube API
 *
 * Testkube provides a Kubernetes-native framework for test definition, execution and results
 *
 * API version: 1.0.0
 * Contact: testkube@kubeshop.io
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */
package testkube

import (
	"time"
)

type TestSuite struct {
	Name        string `json:"name"`
	Namespace   string `json:"namespace,omitempty"`
	Description string `json:"description,omitempty"`
	// Run these batch steps before whole suite
	Before []TestSuiteBatchStep `json:"before,omitempty"`
	// Batch steps to run
	Steps []TestSuiteBatchStep `json:"steps"`
	// Run these batch steps after whole suite
	After []TestSuiteBatchStep `json:"after,omitempty"`
	// test suite labels
	Labels map[string]string `json:"labels,omitempty"`
	// schedule to run test suite
	Schedule         string                     `json:"schedule,omitempty"`
	Repeats          int32                      `json:"repeats,omitempty"`
	Created          time.Time                  `json:"created,omitempty"`
	ExecutionRequest *TestSuiteExecutionRequest `json:"executionRequest,omitempty"`
	Status           *TestSuiteStatus           `json:"status"`
}
