
#import "IGenPropBag.h"
#import "GenPropBagBase.h"

@interface GenPropBag : GenPropBagBase<IGenPropBag> {
    id<IMethodResult> callbackHolder;
}

-(id) init;
-(void) setCallbackProp:(id<IMethodResult>)methodResult;
-(void) callCallback:(id<IMethodResult>)methodResult;

@end