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

// test suite execution update request body
type TestSuiteExecutionUpdateRequest struct {
	// test execution custom name
	Name *string `json:"name,omitempty"`
	// test suite execution number
	Number *int32 `json:"number,omitempty"`
	// test kubernetes namespace (\"testkube\" when not set)
	Namespace *string              `json:"namespace,omitempty"`
	Variables *map[string]Variable `json:"variables,omitempty"`
	// secret uuid
	SecretUUID *string `json:"secretUUID,omitempty"`
	// test suite labels
	Labels *map[string]string `json:"labels,omitempty"`
	// execution labels
	ExecutionLabels *map[string]string `json:"executionLabels,omitempty"`
	// whether to start execution sync or async
	Sync *bool `json:"sync,omitempty"`
	// http proxy for executor containers
	HttpProxy *string `json:"httpProxy,omitempty"`
	// https proxy for executor containers
	HttpsProxy *string `json:"httpsProxy,omitempty"`
	// duration in seconds the test suite may be active, until its stopped
	Timeout        *int32                     `json:"timeout,omitempty"`
	ContentRequest **TestContentUpdateRequest `json:"contentRequest,omitempty"`
	RunningContext *RunningContext            `json:"runningContext,omitempty"`
	// cron job template extensions
	CronJobTemplate *string `json:"cronJobTemplate,omitempty"`
	// number of tests run in parallel
	ConcurrencyLevel *int32 `json:"concurrencyLevel,omitempty"`
}
