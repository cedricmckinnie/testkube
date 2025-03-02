echo "Getting kubectl-testkube plugin"
#!/bin/sh 

if [ ! -z "${DEBUG}" ]; 
then set -x 
fi 

_detect_arch() { 
    case $(uname -m) in 
    amd64|x86_64) echo "x86_64" 
    ;; 
    arm64|aarch64) echo "arm64" 
    ;; 
    i386) echo "i386" 
    ;; 
    *) echo "Unsupported processor architecture"; 
    return 1 
    ;;
     esac 
}

_detect_os(){
    case $(uname) in 
    Linux) echo "Linux" 
    ;; 
    Darwin) echo "macOS" 
    ;; 
    Windows) echo "Windows" 
    ;; 
     esac    
}

_download_url() {
  local arch="$(_detect_arch)"
  local os="$(_detect_os)"
  if [ -z "$TESTKUBE_VERSION" ]; then
    if [ "$1" = "beta" ]; then
      local version=$(curl -s "https://api.github.com/repos/kubeshop/testkube/releases" 2>/dev/null | jq -r '.[].tag_name | select(test("beta"))' | head -n 1)
    else
      local version=$(curl -s "https://api.github.com/repos/kubeshop/testkube/releases/latest" 2>/dev/null | jq -r '.tag_name')
    fi
  else
    local version="$TESTKUBE_VERSION"
  fi

  echo "https://github.com/kubeshop/testkube/releases/download/${version}/testkube_${version:1}_${os}_$arch.tar.gz"
}

if [ "$1" = "beta" ]; then
  echo "Downloading testkube from URL: $(_download_url "beta")"
  curl -sSLf $(_download_url "beta") > testkube.tar.gz
else
  echo "Downloading testkube from URL: $(_download_url)"
  curl -sSLf $(_download_url) > testkube.tar.gz
fi

tar -xzf testkube.tar.gz kubectl-testkube 
rm testkube.tar.gz
mv kubectl-testkube /usr/local/bin/kubectl-testkube
ln -s /usr/local/bin/kubectl-testkube /usr/local/bin/testkube
ln -s /usr/local/bin/kubectl-testkube /usr/local/bin/tk

echo "kubectl-testkube installed in:"
echo "- /usr/local/bin/kubectl-testkube"
echo "- /usr/local/bin/testkube"
echo "- /usr/local/bin/tk"
echo "" 
echo "You'll also need `helm` and Kubernetes `kubectl` installed."
echo "- Install Helm: https://helm.sh/docs/intro/install/"
echo "- Install kubectl: https://kubernetes.io/docs/tasks/tools/#kubectl"