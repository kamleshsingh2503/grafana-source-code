module github.com/grafana/grafana

go 1.15

// Override xorm's outdated go-mssqldb dependency, since we can't upgrade to current xorm (due to breaking changes).
// We need a more current go-mssqldb so we get rid of a version of apache/thrift with vulnerabilities.
replace github.com/denisenkom/go-mssqldb => github.com/denisenkom/go-mssqldb v0.0.0-20200620013148-b91950f658ec

// Override k8s.io/client-go outdated dependency, which is an indirect dependency of grafana/loki.
// It's also present on grafana/loki's go.mod so we'll need till it gets updated.
replace k8s.io/client-go => k8s.io/client-go v0.18.8

require (
	cloud.google.com/go v0.60.0 // indirect
	cloud.google.com/go/storage v1.8.0
	github.com/Azure/go-autorest/autorest/to v0.3.1-0.20191028180845-3492b2aff503 // indirect
	github.com/Azure/go-autorest/autorest/validation v0.2.1-0.20191028180845-3492b2aff503 // indirect
	github.com/BurntSushi/toml v0.3.1
	github.com/OneOfOne/xxhash v1.2.6 // indirect
	github.com/VividCortex/mysqlerr v0.0.0-20170204212430-6c6b55f8796f
	github.com/aws/aws-sdk-go v1.33.12
	github.com/beevik/etree v1.1.0 // indirect
	github.com/benbjohnson/clock v0.0.0-20161215174838-7dc76406b6d3
	github.com/bradfitz/gomemcache v0.0.0-20190913173617-a41fca850d0b
	github.com/centrifugal/centrifuge v0.11.0
	github.com/coreos/go-semver v0.3.0 // indirect
	github.com/coreos/pkg v0.0.0-20180928190104-399ea9e2e55f // indirect
	github.com/crewjam/saml v0.0.0-20191031171751-c42136edf9b1
	github.com/davecgh/go-spew v1.1.1
	github.com/deepmap/oapi-codegen v1.3.11 // indirect
	github.com/denisenkom/go-mssqldb v0.0.0-20200620013148-b91950f658ec
	github.com/elastic/go-sysinfo v1.1.1 // indirect
	github.com/elastic/go-windows v1.0.1 // indirect
	github.com/evanphx/json-patch v4.5.0+incompatible // indirect
	github.com/facebookgo/ensure v0.0.0-20160127193407-b4ab57deab51 // indirect
	github.com/facebookgo/inject v0.0.0-20180706035515-f23751cae28b
	github.com/facebookgo/stack v0.0.0-20160209184415-751773369052 // indirect
	github.com/facebookgo/structtag v0.0.0-20150214074306-217e25fb9691 // indirect
	github.com/facebookgo/subset v0.0.0-20150612182917-8dac2c3c4870 // indirect
	github.com/fatih/color v1.9.0
	github.com/go-macaron/binding v0.0.0-20190806013118-0b4f37bab25b
	github.com/go-macaron/gzip v0.0.0-20160222043647-cad1c6580a07
	github.com/go-macaron/session v0.0.0-20190805070824-1a3cdc6f5659
	github.com/go-sql-driver/mysql v1.5.0
	github.com/go-stack/stack v1.8.0
	github.com/gobwas/glob v0.2.3
	github.com/golang/mock v1.4.3
	github.com/golang/protobuf v1.4.2
	github.com/google/go-cmp v0.5.0
	github.com/gopherjs/gopherjs v0.0.0-20191106031601-ce3c9ade29de // indirect
	github.com/gosimple/slug v1.4.2
	github.com/grafana/grafana-plugin-model v0.0.0-20190930120109-1fc953a61fb4
	github.com/grafana/grafana-plugin-sdk-go v0.77.0
	github.com/grafana/loki v1.6.0
	github.com/grpc-ecosystem/go-grpc-middleware v1.2.1
	github.com/hashicorp/go-hclog v0.12.2
	github.com/hashicorp/go-msgpack v0.5.5 // indirect
	github.com/hashicorp/go-plugin v1.2.2
	github.com/hashicorp/go-version v1.2.0
	github.com/inconshreveable/log15 v0.0.0-20180818164646-67afb5ed74ec
	github.com/influxdata/influxdb-client-go/v2 v2.0.1
	github.com/jmespath/go-jmespath v0.3.0
	github.com/jung-kurt/gofpdf v1.10.1
	github.com/k0kubun/colorstring v0.0.0-20150214042306-9440f1994b88 // indirect
	github.com/lib/pq v1.3.0
	github.com/linkedin/goavro/v2 v2.9.7
	github.com/magefile/mage v1.9.0
	github.com/mattn/go-colorable v0.1.7 // indirect
	github.com/mattn/go-ieproxy v0.0.0-20191113090002-7c0f6868bffe // indirect
	github.com/mattn/go-isatty v0.0.12
	github.com/mattn/go-sqlite3 v1.11.0
	github.com/onsi/gomega v1.7.1 // indirect
	github.com/opentracing/opentracing-go v1.2.0
	github.com/patrickmn/go-cache v2.1.0+incompatible
	github.com/pkg/errors v0.9.1
	github.com/prometheus/client_golang v1.7.1
	github.com/prometheus/client_model v0.2.0
	github.com/prometheus/common v0.10.0
	github.com/rainycape/unidecode v0.0.0-20150907023854-cb7f23ec59be // indirect
	github.com/robfig/cron v0.0.0-20180505203441-b41be1df6967
	github.com/robfig/cron/v3 v3.0.0
	github.com/smartystreets/goconvey v1.6.4
	github.com/spaolacci/murmur3 v1.1.0 // indirect
	github.com/stretchr/testify v1.5.1
	github.com/teris-io/shortid v0.0.0-20171029131806-771a37caa5cf
	github.com/timberio/go-datemath v0.1.1-0.20200323150745-74ddef604fff
	github.com/tmc/grpc-websocket-proxy v0.0.0-20190109142713-0ad062ec5ee5 // indirect
	github.com/ua-parser/uap-go v0.0.0-20190826212731-daf92ba38329
	github.com/uber/jaeger-client-go v2.25.0+incompatible
	github.com/unknwon/com v1.0.1
	github.com/urfave/cli v1.22.1 // indirect
	github.com/urfave/cli/v2 v2.1.1
	github.com/xorcare/pointer v1.1.0
	github.com/yudai/gojsondiff v1.0.0
	github.com/yudai/golcs v0.0.0-20170316035057-ecda9a501e82 // indirect
	github.com/yudai/pp v2.0.1+incompatible // indirect
	golang.org/x/crypto v0.0.0-20200728195943-123391ffb6de
	golang.org/x/net v0.0.0-20200813134508-3edf25e44fcc
	golang.org/x/oauth2 v0.0.0-20200107190931-bf48bf16ab8d
	golang.org/x/sync v0.0.0-20200625203802-6e8e738ad208
	golang.org/x/sys v0.0.0-20200812155832-6a926be9bd1d // indirect
	golang.org/x/text v0.3.3 // indirect
	google.golang.org/grpc v1.30.0
	gopkg.in/alexcesaro/quotedprintable.v3 v3.0.0-20150716171945-2caba252f4dc // indirect
	gopkg.in/asn1-ber.v1 v1.0.0-20181015200546-f715ec2f112d // indirect
	gopkg.in/ini.v1 v1.51.0
	gopkg.in/ldap.v3 v3.0.2
	gopkg.in/macaron.v1 v1.3.9
	gopkg.in/mail.v2 v2.3.1
	gopkg.in/redis.v5 v5.2.9
	gopkg.in/square/go-jose.v2 v2.4.1
	gopkg.in/yaml.v2 v2.3.0
	k8s.io/client-go v12.0.0+incompatible // indirect
	xorm.io/core v0.7.3
	xorm.io/xorm v0.8.1
)