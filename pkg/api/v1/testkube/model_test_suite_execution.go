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

// Test suite executions data
type TestSuiteExecution struct {
	// execution id
	Id string `json:"id"`
	// execution name
	Name      string                    `json:"name"`
	TestSuite *ObjectRef                `json:"testSuite"`
	Status    *TestSuiteExecutionStatus `json:"status,omitempty"`
	// Environment variables passed to executor.
	// Deprecated: use Basic Variables instead
	Envs      map[string]string   `json:"envs,omitempty"`
	Variables map[string]Variable `json:"variables,omitempty"`
	// secret uuid
	SecretUUID string `json:"secretUUID,omitempty"`
	// test start time
	StartTime time.Time `json:"startTime,omitempty"`
	// test end time
	EndTime time.Time `json:"endTime,omitempty"`
	// test duration
	Duration string `json:"duration,omitempty"`
	// test duration in ms
	DurationMs int32 `json:"durationMs,omitempty"`
	// steps execution results
	StepResults []TestSuiteStepExecutionResultV2 `json:"stepResults,omitempty"`
	// batch steps execution results
	ExecuteStepResults []TestSuiteBatchStepExecutionResult `json:"executeStepResults,omitempty"`
	// test suite labels
	Labels         map[string]string `json:"labels,omitempty"`
	RunningContext *RunningContext   `json:"runningContext,omitempty"`
}
