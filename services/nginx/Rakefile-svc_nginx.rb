
namespace :svc_nginx do

    desc "svc_nginx: show log"
    task :log do
      sh("docker logs -f svc_nginx")
    end

    desc "svc_nginx: launch bash in container"
    task :bash do
      sh("docker exec -it svc_nginx /bin/bash")
    end

    desc "svc_nginx: restart service "
    task :restart do
      sh("docker rm -f svc_nginx")
      sh("rake up")
    end

end