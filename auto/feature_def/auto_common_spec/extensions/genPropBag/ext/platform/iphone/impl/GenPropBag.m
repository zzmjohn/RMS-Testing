
#import "GenPropBag.h"


@implementation GenPropBag

-(id)init {
    self = [super init];
    callbackHolder = nil;
    return self;
}

-(void) setCallbackProp:(id<IMethodResult>)methodResult {
    callbackHolder = methodResult;
}

-(void) callCallback:(id<IMethodResult>)methodResult {
    if ([callbackHolder hasCallback]) {
        [callbackHolder setResult:@"set"];
    }
}


@end