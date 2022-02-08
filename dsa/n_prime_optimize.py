def isPrime(n,prime):
    half=n//2
    for i in prime :
        if i>half:
            return prime+[n]
        if n%i == 0 :
            return prime
    return prime+[n]

prime=[2]
for i in range(3,100000):
    prime=isPrime(i,prime)

print(len(prime))