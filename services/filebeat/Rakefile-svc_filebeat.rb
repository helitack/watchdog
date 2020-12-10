
namespace :svc_filebeat do

    desc "svc_filebeat: show log"
    task :log do
      sh("docker logs -f svc_filebeat")
    end

    desc "svc_filebeat: launch bash in container"
    task :bash do
      sh("docker exec -it svc_filebeat /bin/bash")
    end

    desc "svc_filebeat: restart service "
    task :restart do
      sh("docker rm -f svc_filebeat")
      sh("rake up")
    end

end