
namespace :fb do

    desc "svc-filebeat: show log"
    task :log do
      sh("docker logs -f svc-filebeat")
    end

    desc "svc-filebeat: launch bash in container"
    task :bash do
      sh("docker exec -it svc_filebeat /bin/bash")
    end

    desc "svc-filebeat: restart service "
    task :restart do
      sh("docker rm -f svc-filebeat")
      sh("rake up")
    end

end