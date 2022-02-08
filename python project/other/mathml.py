import os
import fnmatch


def recursive_glob(rootdir, pattern):
    matching_files = []
    for d, _, fnames in os.walk(rootdir):
        matching_files.extend(
            os.path.join(d, fname) for fname in fnames
            if fnmatch.fnmatch(fname, pattern)
        )
    return matching_files


xmlfiles = recursive_glob(r"D:\", "+"*.xml")