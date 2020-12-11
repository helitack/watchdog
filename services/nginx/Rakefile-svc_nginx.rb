
namespace :nx do

    desc "svc-nginx: show log"
    task :log do
      sh("docker logs -f svc-nginx")
    end

    desc "svc-nginx: launch bash in container"
    task :bash do
      sh("docker exec -it svc-nginx /bin/bash")
    end

    desc "svc-nginx: restart service "
    task :restart do
      sh("docker rm -f svc-nginx")
      sh("rake up")
    end

end