
namespace :svc_nginx do

    desc "svc_nginx: show log"
    task :log do
      sh("docker logs -f #{SOLUTION_NAME}_svc_nginx_1")
    end

    desc "svc_nginx: launch bash in container"
    task :bash do
      sh("docker exec -it #{SOLUTION_NAME}_svc_nginx_1 /bin/bash")
    end

    desc "svc_nginx: restart service "
    task :restart do
      sh("docker rm -f #{SOLUTION_NAME}_svc_nginx_1")
      sh("rake up")
    end

end