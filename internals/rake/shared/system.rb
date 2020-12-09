def is_mac()
  return RbConfig::CONFIG["host_os"] =~ /darwin/
end

def is_linux()
  return RbConfig::CONFIG["host_os"] =~ /linux/
end

def is_windows()
  return RbConfig::CONFIG["host_os"] =~ /widows|mingw32/
end