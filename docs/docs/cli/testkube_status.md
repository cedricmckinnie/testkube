## testkube status

Show status of feature or resource

```
testkube status [feature|resource] [flags]
```

### Options

```
  -h, --help   help for status
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
* [testkube status oauth](testkube_status_oauth.md)	 - Get oauth status
* [testkube status telemetry](testkube_status_telemetry.md)	 - Get telemetry status

