## testkube enable

Enable feature

```
testkube enable <feature> [flags]
```

### Options

```
  -h, --help   help for enable
```

### Options inherited from parent commands

```
  -a, --api-uri string     api uri, default value read from config if set (default "https://demo.testkube.io/results/v1")
  -c, --client string      client used for connecting to Testkube API one of proxy|direct (default "proxy")
      --namespace string   Kubernetes namespace, default value read from config if set (default "testkube")
      --oauth-enabled      enable oauth
      --verbose            show additional debug messages
```

### SEE ALSO

* [testkube](testkube.md)	 - Testkube entrypoint for kubectl plugin
* [testkube enable oauth](testkube_enable_oauth.md)	 - enable oauth authentication for direct api
* [testkube enable telemetry](testkube_enable_telemetry.md)	 - Enable collecting of anonymous telemetry data

