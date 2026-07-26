import os
import re

print("Auditing and synchronizing Administration navigation & routes...")

# 1. Update src/constants/navigation.ts to align with actual module paths
nav_file = "/home/mamon/React/ERP-Frontend/src/constants/navigation.ts"

if os.path.exists(nav_file):
    with open(nav_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Fix payment-gateways -> payments
    content = content.replace("'/administration/integrations/payment-gateways'", "'/administration/integrations/payments'")
    
    with open(nav_file, 'w', encoding='utf-8') as f:
        f.write(content)
    print("✓ Fixed route path mismatches in src/constants/navigation.ts")

# 2. Update Integrations navigation to use payments path consistently
integrations_nav = "/home/mamon/React/ERP-Frontend/src/modules/Administration/Integrations/navigation.ts"
if os.path.exists(integrations_nav):
    with open(integrations_nav, 'r', encoding='utf-8') as f:
        content = f.read()

    content = content.replace("'/administration/integrations/payment-gateways'", "'/administration/integrations/payments'")
    
    with open(integrations_nav, 'w', encoding='utf-8') as f:
        f.write(content)
    print("✓ Synchronized src/modules/Administration/Integrations/navigation.ts")

print("\nAudit and cleanup complete!")
